import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "telegrambotified-web",
    telegramLoginConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_BOT_USERNAME),
    note: "This endpoint does not validate a Telegram login or connect to Telegram.",
  });
}
