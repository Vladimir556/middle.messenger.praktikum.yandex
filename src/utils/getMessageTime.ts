export function getMessageTime(timestamp: number) {
  const dateNow = new Date();
  const nowDayNumber = dateNow.getDay();
  const nowMonthNumber = dateNow.getMonth();

  const dateMessage = new Date(timestamp);
  const messageDayNumber = dateMessage.getDay();
  const messageMonthNumber = dateMessage.getMonth();
  const messageHours = dateMessage.getHours();
  const messageMinutes = dateMessage.getMinutes();

  let result: string = '';

  if (nowMonthNumber === messageMonthNumber && nowDayNumber === messageDayNumber) {
    if (messageHours < 10) {
      result = `0${dateMessage.getHours()}:`;
    } else {
      result = `${dateMessage.getHours()}:`;
    }

    if (messageMinutes < 10) {
      result = `${result}0${messageMinutes}`;
    } else {
      result = `${result}${messageMinutes}`;
    }
  } else {
    switch (messageDayNumber) {
      case 1:
        result = 'пн';
        break;
      case 2:
        result = 'вт';
        break;
      case 3:
        result = 'ср';
        break;
      case 4:
        result = 'чт';
        break;
      case 5:
        result = 'пт';
        break;
      case 6:
        result = 'сб';
        break;
      case 7:
        result = 'вс';
        break;
    }
  }
  console.log(result);
}
