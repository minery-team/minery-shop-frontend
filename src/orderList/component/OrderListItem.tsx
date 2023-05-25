import { Order } from '@/common/models';

interface Props {
  order: Order;
}

const OrderListItem = ({ order }: Props) => {
  return (
    <div>
      <div>
        {order.time.toISOString()} {order.status}
      </div>
      {order.items.map((item) => (
        <div key={item.id}>
          <img src={item.product.image} alt={item.product.name} />
          <div>{item.product.name}</div>
          <div>{item.product.price}</div>
          <div>{item.amount}개</div>
        </div>
      ))}
    </div>
  );
};

export default OrderListItem;
