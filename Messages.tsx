import { useEffect, useMemo, useState } from "react";
import { Appearance, View, Text, Pressable } from "react-native";

type Message =
  | {
      type: "log";
      messageId: string;
      timestamp: string;
      payload: {
        level: "ERROR" | "CRITICAL" | "INFO" | "DEBUG";
        message: string;
      };
    }
  | {
      type: "event";
      messageId: string;
      timestamp: string;
      payload: {
        eventType: "FIRE_ALARM_ENGAGED" | "FIRE_ALARM_RESET" | "UNKNOWN";
        locationId: string;
      };
    }
  | {
      type: "model-change";
      messageId: string;
      timestamp: string;
      payload: {
        modelId: string;
        change: {
          field1?: string;
          field2?: string;
          field3?: string;
        };
      };
    };

type ParsedMessage = Message & {
  isViewed: boolean;
};

type MessageLisProps = {
  messages: Message[];
};
const MessageList = ({ messages }: MessageLisProps) => {
  const colorScheme = Appearance.getColorScheme();
  const [parsedMessages, setParsedMessages] = useState<ParsedMessage[]>([]);
  const isDarkMode = useMemo(() => colorScheme === "dark", [colorScheme]);

  useEffect(() => {
    const nextParsedMessages = messages.map((m) => ({ ...m, isViewed: false }));
    setParsedMessages(nextParsedMessages);
  }, [messages, setParsedMessages]);

  const logBannerColors = {
    INFO: isDarkMode
      ? {
          bg: "blue",
          font: "white",
        }
      : {
          bg: "green",
          font: "white",
        },
    DEBUG: isDarkMode
      ? {
          bg: "white",
          font: "black",
        }
      : {
          bg: "black",
          font: "white",
        },
    CRITICAL: isDarkMode
      ? {
          bg: "pink",
          font: "black",
        }
      : {
          bg: "red",
          font: "white",
        },
    ERROR: isDarkMode
      ? {
          bg: "yellow",
          font: "black",
        }
      : {
          bg: "orange",
          font: "white",
        },
  };

  const cardHeader = (m: ParsedMessage) => {
    if (m.type === "log")
      return (
        <View
          style={{
            backgroundColor: logBannerColors[m.payload.level].bg,
            padding: "0.5rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <Text
              style={{
                color: logBannerColors[m.payload.level].font,
              }}
            >
              {m.payload.level} {m.type}
            </Text>
            <Text
              style={{
                color: logBannerColors[m.payload.level].font,
              }}
            >
              {m.timestamp}
            </Text>
          </View>
          <Pressable
            onPress={
              m.isViewed
                ? () => markAsUnviewed(m.messageId)
                : () => markAsViewed(m.messageId)
            }
          >
            <Text>{m.isViewed ? "✅" : "👁"}</Text>
          </Pressable>
        </View>
      );
    if (m.type === "event")
      return (
        <View
          style={{
            backgroundColor: "gray",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <Text
              style={{
                color: "black",
              }}
            >
              {m.payload.eventType} {m.type}
            </Text>
            <Text
              style={{
                color: "black",
              }}
            >
              {m.timestamp}
            </Text>
          </View>
          <Pressable
            onPress={
              m.isViewed
                ? () => markAsUnviewed(m.messageId)
                : () => markAsViewed(m.messageId)
            }
          >
            <Text>{m.isViewed ? "✅" : "👁"}</Text>
          </Pressable>
        </View>
      );
    if (m.type === "model-change")
      return (
        <View
          style={{
            backgroundColor: "pink",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
          >
            <Text
              style={{
                color: "black",
              }}
            >
              {m.payload.modelId} {m.type}
            </Text>
            <Text
              style={{
                color: "black",
              }}
            >
              {m.timestamp}
            </Text>
          </View>
          <Pressable
            onPress={
              m.isViewed
                ? () => markAsUnviewed(m.messageId)
                : () => markAsViewed(m.messageId)
            }
          >
            <Text>{m.isViewed ? "✅" : "👁"}</Text>
          </Pressable>
        </View>
      );
  };
  const markAsViewed = (messageId: string) => {
    setParsedMessages(
      parsedMessages.map((m) =>
        m.messageId === messageId ? { ...m, isViewed: true } : m
      )
    );
  };

  const markAsUnviewed = (messageId: string) => {
    setParsedMessages(
      parsedMessages.map((m) =>
        m.messageId === messageId ? { ...m, isViewed: false } : m
      )
    );
  };

  return (
    <View>
      {parsedMessages.map((m, i) =>
        m.type === "log" ? (
          <View
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2rem",
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#000",
              borderRadius: 4,
            }}
          >
            {cardHeader(m)}
            <View style={{ padding: "0.5rem" }}>
              <Text>{m.payload.message}</Text>
            </View>
          </View>
        ) : m.type === "event" ? (
          <View
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2rem",
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#000",
              borderRadius: 4,
            }}
          >
            {cardHeader(m)}
            <View style={{ padding: "0.5rem" }}>
              <Text>{m.payload.locationId}</Text>
            </View>
          </View>
        ) : m.type === "model-change" ? (
          <View
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2rem",
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#000",
              borderRadius: 4,
            }}
          >
            {cardHeader(m)}
            <View style={{ padding: "0.5rem" }}>
              <Text>{JSON.stringify(m.payload.change, null, "  ")}</Text>
            </View>
          </View>
        ) : (
          <></>
        )
      )}
    </View>
  );
};

export default MessageList;
