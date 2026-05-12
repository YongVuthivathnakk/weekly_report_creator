import { Lexer, Token } from "marked";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";
import { docStyles } from "@/components/document/document-preview-style";

function renderInline(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <Text key={i} style={{ fontFamily: "Helvetica-Bold" }}>
        {part}
      </Text>
    ) : (
      <Text key={i}>{part}</Text>
    )
  );
}

export function mdToPdf(markdown: string) {
  const tokens = Lexer.lex(markdown);

  return tokens.map((token: Token, i: number) => {
    // paragraph
    if (token.type === "paragraph") {
      return (
        <Text key={i} style={docStyles.answerText}>
          {renderInline(token.text)}
        </Text>
      );
    }

    // bullet list
    if (token.type === "list" && !token.ordered) {
      return (
        <View key={i}>
          {token.items.map((item:any, j:any) => (
            <View key={j} style={{ flexDirection: "row"}}>
              <Text style={docStyles.answerText}>{"• "}</Text>
              <Text style={[docStyles.answerText]}>
                {renderInline(item.text)}
              </Text>
            </View>
          ))}
        </View>
      );
    }

    // numbered list
    if (token.type === "list" && token.ordered) {
      return (
        <View key={i}>
          {token.items.map((item:any, j:any) => (
            <View key={j} style={{ flexDirection: "row", paddingLeft: 20 }}>
              <Text style={docStyles.answerText}>{j + 1}. </Text>
              <Text style={[docStyles.answerText, { flex: 1 }]}>
                {renderInline(item.text)}
              </Text>
            </View>
          ))}
        </View>
      );
    }

    // heading
    if (token.type === "heading") {
      return (
        <Text key={i} style={[docStyles.answerText, { fontFamily: "Helvetica-Bold", fontSize: 14 - token.depth }]}>
          {token.text}
        </Text>
      );
    }

    // blockquote
    if (token.type === "blockquote") {
      return (
        <View key={i} style={{ borderLeft: "2px solid #ccc", paddingLeft: 10, marginLeft: 10 }}>
          <Text style={[docStyles.answerText, { color: "#666" }]}>
            {token.text}
          </Text>
        </View>
      );
    }

    // horizontal rule
    if (token.type === "hr") {
      return <View key={i} style={{ borderBottom: "1px solid #ccc", marginVertical: 6 }} />;
    }

    // space between blocks
    if (token.type === "space") {
      return <View key={i} style={{ marginBottom: 4 }} />;
    }

    return null;
  });
}