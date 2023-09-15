// import { Transformation } from 'class-transformer';
export function TransformMillisToDateString(value: any): string {
  //   const value = params.value as number;
  console.log(value);
  const date = new Date(value.obj.workDate);
  console.log(date);
  const formattedDate = date.toISOString().split('T')[0];
  return formattedDate;
  //   return date;
}
