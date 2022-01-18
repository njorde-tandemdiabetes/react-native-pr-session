export const messages: any = [
  {
    type: "log",
    messageId: "b32195d6-62f2-4402-98af-63e27d7cea23",
    timestamp: "2022-01-14T17:21:02.355Z",
    payload: {
      level: "ERROR",
      message: "something bad happened",
    },
  },
  {
    type: "event",
    messageId: "8928e653-8c16-45c2-8257-c0a7aa3aedcc",
    timestamp: "2022-01-14T17:38:18.315Z",
    payload: {
      eventType: "FIRE_ALARM_ENGAGED",
      locationId: "12345",
    },
  },
  {
    type: "log",
    messageId: "4b4dc593-3a21-459b-a4c5-95548b6e109c",
    timestamp: "2022-01-14T18:22:09.305Z",
    payload: {
      level: "CRITICAL",
      message: "heads will roll",
    },
  },
  {
    type: "model-change",
    messageId: "6187489e-02d5-4cfd-a062-3e4b698cb033",
    timestamp: "2022-01-14T22:17:02.312Z",
    payload: {
      modelId: "12345",
      change: {
        field1: "new value",
      },
    },
  },
  {
    type: "model-change",
    messageId: "df40a72e-a49e-4334-b3e3-f3846daeffe3",
    timestamp: "2022-01-14T22:21:56.355Z",
    payload: {
      modelId: "12345",
      change: {
        field2: "new value2",
        field3: "new value3",
      },
    },
  },
  {
    type: "log",
    messageId: "be953fee-b1a7-47d7-a91e-7638697384b0",
    timestamp: "2022-01-14T23:21:45.355Z",
    payload: {
      level: "ERROR",
      message: "it happened again happened",
    },
  },
  {
    type: "event",
    messageId: "3f4b91d5-3d64-4dbf-aab2-6540546f32cf",
    timestamp: "2022-01-14T23:59:59.355Z",
    payload: {
      eventType: "FIRE_ALARM_RESET",
      locationId: "12345",
    },
  },
];
