import * as fs from 'fs';
import * as path from 'path';

export function twoDigitNumberString(value: number) {
  if (value < 10) {
    return '0' + value;
  }
  return value.toString();
}

export function getFileList(directoryPath: string): string[] {
  const fileList: string[] = [];

  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      fileList.push(file);
    }
  });

  return fileList;
}

export function parseCSV(csvString: string): string[][] {
  const rows: string[][] = [];

  // 줄 바꿈 문자를 기준으로 CSV 문자열을 행으로 분할
  const lines = csvString.split('\n');

  lines.forEach((line) => {
    // 쉼표로 구분된 값을 추출
    const values: string[] = [];

    let current = '';
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        // 이스케이프 처리를 위한 큰 따옴표 처리
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        // 구분 기호인 쉼표를 만나면 값을 추가
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }

    // 남은 값 추가
    values.push(current.trim());

    // 행을 추가
    rows.push(values);
  });

  return rows;
}

export function writeJSONToFile(filePath: string, jsonData: any): void {
  const jsonString = JSON.stringify(jsonData);
  fs.writeFileSync(filePath, jsonString, 'utf8');
}