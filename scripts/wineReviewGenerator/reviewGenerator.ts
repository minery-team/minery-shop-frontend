import { nameSet } from "./constants";
import { Review } from "./type";
import { getFileList, parseCSV, twoDigitNumberString } from "./util";

export class ReviewGenerator {
  readonly parsedCsvJSON: Array<Array<string>>;

  readonly imageDirectoryAbsolutePath: string;

  private wineReviewMap: Map<string, Review[]> = new Map();

  private currentReviewId = 1;

  constructor(parsedCsvJSON: Array<Array<string>>, imageDirectoryAbsolutePath: string) {
    this.parsedCsvJSON = parsedCsvJSON;
    this.imageDirectoryAbsolutePath = imageDirectoryAbsolutePath;
  }

  generate() {
    // const parsedCsv = parseCSV(this.rawReviewCsv);
    this.parsedCsvJSON.forEach((parsedCsvRow, index) => this.parseAndAddWine(parsedCsvRow, index))

    return this.wineReviewMap;
  }

  private parseAndAddWine(parsedCsvRow: string[], wineIndex: number) {
    const wineName = parsedCsvRow[0];
    const rawReviews = parsedCsvRow.slice(1).filter((rawReview) => rawReview.length > 0);
    const parsedReviews = rawReviews.map((rawReview, reviewIndex) => this.parseReview(rawReview, reviewIndex + 1, wineName, wineIndex + 1));
    this.wineReviewMap.set(wineName, parsedReviews);
  }

  private static reviewImageFlag = '[🍷image🍷]';
  private parseReview(review: string, reviewIndex: number, wineName: string, wineIndex: number): Review {
    const hasImage = review.startsWith(ReviewGenerator.reviewImageFlag);
    const flagRemovedReview = hasImage ? review.replace(ReviewGenerator.reviewImageFlag, '') : review;
    const reviewImagePath = hasImage && this.getWineReviewImagePath(reviewIndex, wineName, wineIndex)
    return {
      id: this.currentReviewId++,
      name: this.getRandomPersonName(),
      rating: this.getRandomRating(),
      date: this.getRandomDate(),
      content: flagRemovedReview,
      images: reviewImagePath ? [reviewImagePath] : undefined,
    }
  }

  private static wineReviewImageDirectory = 'wine-review-images';
  private getWineReviewImagePath(reviewIndex: number, wineName: string, wineIndex: number) {
    const wineReviewImageDirectory = `${this.imageDirectoryAbsolutePath}/${twoDigitNumberString(wineIndex)}. ${wineName}`;
    const reviewImageFileWithoutExtension = `${wineIndex}_리뷰${reviewIndex}`;

    // 인코딩 이슈인듯..
    const reviewImageFileWithoutExtension2 = `${wineIndex}_리뷰${reviewIndex}`;

    const candidateFiles = getFileList(wineReviewImageDirectory);
    const reviewImageFile = candidateFiles.find((file) => file.startsWith(reviewImageFileWithoutExtension)
      || file.startsWith(reviewImageFileWithoutExtension2));

    if (reviewImageFile) {
      return `/${ReviewGenerator.wineReviewImageDirectory}/${twoDigitNumberString(wineIndex)}. ${wineName}/${reviewImageFile}`
    }
  }


  private getRandomPersonName() {
    const randomIndex = Math.floor(Math.random() * nameSet.length);
    return nameSet[randomIndex];
  }


  private static maxRating = 5;
  private static minRating = 3;
  private getRandomRating() {
    return Math.floor(Math.random() * (ReviewGenerator.maxRating - ReviewGenerator.minRating)) + ReviewGenerator.minRating;
  }

  private getRandomDate() {

    const start = new Date(2023, 0, 21).getTime(); // month is 0-indexed
    const end = new Date(2023, 6, 9).getTime();

    // Get a random time between start and end
    const randomTime = start + Math.random() * (end - start);

    // Convert the random time back to a Date
    const randomDate = new Date(randomTime);

    // Format the date as YYYY-MM-DD
    const year = randomDate.getFullYear();
    const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
    const day = randomDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}
