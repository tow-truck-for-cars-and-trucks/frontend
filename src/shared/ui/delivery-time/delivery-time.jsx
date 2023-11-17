import './delivery-time.scss';

/**
 * @param {string} time - time of the delivery
 */
function DeliveryTime({ time }) {
  return (
    <div className="delivery-time">
      <p className="delivery-time__description">
        Примерное&nbsp;время подачи&nbsp;эвакуатора
      </p>
      <p className="delivery-time__description">{time}</p>
    </div>
  );
}

export default DeliveryTime;
