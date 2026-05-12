import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  PDFViewer,
} from "@react-pdf/renderer";
import { useFormStore } from "@/store/useFormStore";
import { docStyles } from "./document-preview-style";

export default function DocumentPreview() {
  const { firstName, lastName, schoolId, answers } = useFormStore((s) => s);

  const fullName = `${firstName} ${lastName}`;

  return (
    <PDFViewer className="w-full h-screen">
      <Document>
        <Page size="A4" style={docStyles.page}>
          {/* Header logo + meta */}
          <View style={docStyles.headerSection}>
            <Image
              src="/images/idt-logo.png"
              style={{ width: 260, marginBottom: 10 }}
            />
            <Text style={docStyles.headerMeta}>
              Faculty of Digital Engineering
            </Text>
            <Text style={docStyles.headerMeta}>
              Department of Computer Science
            </Text>
            <Text style={docStyles.headerMeta}>
              Specialized in Software Engineering
            </Text>
            <Text style={docStyles.headerMeta}>Generation 10</Text>
          </View>

          {/* Title */}
          <View style={docStyles.titleWrapper}>
            <Text style={docStyles.title}>Weekly Report</Text>
          </View>

          {/* Student info */}
          <View style={docStyles.infoTable}>
            <View style={docStyles.infoRow}>
              <Text style={docStyles.infoLabel}>Student's Name</Text>
              <Text style={docStyles.infoColon}>:</Text>
              <Text style={docStyles.infoValue}>{fullName}</Text>
            </View>
            <View style={docStyles.infoRow}>
              <Text style={docStyles.infoLabel}>Student's Id</Text>
              <Text style={docStyles.infoColon}>:</Text>
              <Text style={docStyles.infoValue}>{schoolId}</Text>
            </View>
            <View style={docStyles.infoRow}>
              <Text style={docStyles.infoLabel}>Date</Text>
              <Text style={docStyles.infoColon}>:</Text>
              <Text style={docStyles.infoValue}>
                {" "}
                {new Date().toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Text>
            </View>
          </View>

          {/* Questions */}
          <View style={docStyles.questionBlock}>
            <Text style={docStyles.questionText}>
              1. What have you completed this week?
            </Text>
            <Text style={docStyles.answerText}>
              {answers[0] || "{First answer}"}
            </Text>
          </View>

          <View style={docStyles.questionBlock}>
            <Text style={docStyles.questionText}>
              2. What are your challenges?
            </Text>
            <Text style={docStyles.answerText}>
              {answers[1] || "{Second answer}"}
            </Text>
          </View>

          <View style={docStyles.questionBlock}>
            <Text style={docStyles.questionText}>
              3. What are you planning to do next week?
            </Text>
            <Text style={docStyles.answerText}>
              {answers[2] || "{Third answer}"}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
