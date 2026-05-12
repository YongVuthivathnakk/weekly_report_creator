import { docStyles } from "@/components/document/document-preview-style";
import { Text, View } from "@react-pdf/renderer";

export function mdToPdf(markdown: string) {
  const lines = markdown.split("\n");

  return lines.map((line, i) => {
    if (
      line.startsWith("+ ")
    ) {
      return (
        <Text key={i} style={docStyles.answerText}>
          {"• "}
          {line.slice(2)}
        </Text>
      );
    }

    if (/^\d+\.\s/.test(line)) {
      return (
        <Text key={i} style={docStyles.answerText}>
          {line}
        </Text>
      );
    }

    if (line.includes("**")) {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <Text key={i} style={docStyles.answerText}>
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <Text key={j} style={{ fontFamily: "Helvetica-Bold" }}>
                {part}
              </Text>
            ) : (
              <Text key={j}>{part}</Text>
            ),
          )}
        </Text>
      );
    }

    // empty line = small spacing
    if (line.trim() === "") {
      return <View key={i} style={{ marginBottom: 4 }} />;
    }

    return (
      <Text key={i} style={docStyles.answerText}>
        {line}
      </Text>
    );
  });
}
