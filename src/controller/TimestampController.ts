import { Request, Response } from 'express'

export const TimestampController = async (req: Request, res: Response) => {
  const paramTimestamp = req.params.timestamp
  const validDate = Date.parse(paramTimestamp)

  // * if paramDate is not empty
  // * if paramDate is is not valid
  // * if paramDate is not a number
  if (paramTimestamp && !validDate && !Number(paramTimestamp)) {
    return res.json({
      error: 'Invalid Date',
    })
  }

  // * if paramDate is not empty
  // * if not a valid date
  // * if in milliseconds
  if (paramTimestamp && !validDate && Number(paramTimestamp)) {
    const date = new Date(Number(paramTimestamp))

    return res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    })
  }

  // * if paramDate is empty
  if (!paramTimestamp) {
    const dateToday = new Date()

    return res.json({
      unix: Date.now(),
      utc: dateToday.toUTCString(),
    })
  }

  // * if paramDate is valid date
  const date = new Date(paramTimestamp)

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  })
}
