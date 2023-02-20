import { Request, Response } from 'express'

export const TimestampController = async (req: Request, res: Response) => {
  const paramTimestamp = req.params.timestamp
  const validDate = Date.parse(paramTimestamp)

  // * if paramTimestamp is not empty
  // * if validDate is is not valid
  // * if paramTimestamp is not a number
  if (paramTimestamp && !validDate && !Number(paramTimestamp)) {
    return res.json({
      error: 'Invalid Date',
    })
  }

  // * if paramTimestamp is not empty
  // * if validDate not a valid date
  // * if paramTimestamp in milliseconds
  if (paramTimestamp && !validDate && Number(paramTimestamp)) {
    const date = new Date(Number(paramTimestamp))

    return res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    })
  }

  // * if paramTimestamp is empty
  if (!paramTimestamp) {
    const dateToday = new Date()

    return res.json({
      unix: Date.now(),
      utc: dateToday.toUTCString(),
    })
  }

  // * if paramTimestamp is valid date
  const date = new Date(paramTimestamp)

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  })
}
