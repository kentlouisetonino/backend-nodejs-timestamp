import { Request, Response } from 'express';

export const TimestampController = async (req: Request, res: Response) => {
  const paramTimestamp = req.params.timestamp;
  const validDate = Date.parse(paramTimestamp);

  // If paramTimestamp is not empty.
  // If validDate is is not valid.
  // If paramTimestamp is not a number.
  if (paramTimestamp && !validDate && !Number(paramTimestamp)) {
    return res.json({
      error: 'Invalid Date',
    });
  }

  // If paramTimestamp is not empty.
  // If validDate not a valid date.
  // If paramTimestamp in milliseconds.
  if (paramTimestamp && !validDate && Number(paramTimestamp)) {
    const date = new Date(Number(paramTimestamp));

    return res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    });
  }

  // If paramTimestamp is empty.
  if (!paramTimestamp) {
    const dateToday = new Date();

    return res.json({
      unix: Date.now(),
      utc: dateToday.toUTCString(),
    });
  }

  // If paramTimestamp is valid date.
  const date = new Date(paramTimestamp);

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
};
