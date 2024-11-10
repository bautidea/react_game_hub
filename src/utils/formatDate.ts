export function formatDate(date: string | null) {
  if (!date) return;

  const montMapper: { [key: string]: string } = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  };

  const splitDate = date.split('-');

  return `${montMapper[splitDate[1]]} ${splitDate[2]}, ${splitDate[0]}`;
}
