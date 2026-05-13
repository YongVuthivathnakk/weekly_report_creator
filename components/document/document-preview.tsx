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
import { mdToPdf } from "@/lib/mdToPdf";

export default function DocumentPreview() {
  const { firstName, lastName, schoolId, answers, date } = useFormStore((s) => s);

  const fullName = `${firstName} ${lastName}`;

  return (

    <div className="w-[50vh] md:w-[90vh] px-4 h-[90vh] pt-6 flex justify-center">
      <PDFViewer className="rounded-lg border-2 border-gray-400 h-full w-full">
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
                  { date ?  new Date(date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }) : " "}
                </Text>
              </View>
            </View>
            {/* Questions */}
            <View style={docStyles.questionBlock}>
              <Text style={docStyles.questionText}>
                1. What have you completed this week?
              </Text>
              {answers[0] ? (
                mdToPdf(answers[0])
              ) : (
                <Text style={docStyles.answerText}>{"{First answer}"}</Text>
              )}
            </View>

            <View style={docStyles.questionBlock}>
              <Text style={docStyles.questionText}>
                2. What are your challenges?
              </Text>
              {answers[1] ? (
                mdToPdf(answers[1])
              ) : (
                <Text style={docStyles.answerText}>{"{Second answer}"}</Text>
              )}
            </View>

            <View style={docStyles.questionBlock}>
              <Text style={docStyles.questionText}>
                3. What are you planning to do next week?
              </Text>
              {answers[2] ? (
                mdToPdf(answers[2])
              ) : (
                <Text style={docStyles.answerText}>{"{Third answer}"}</Text>
              )}
            </View>
          </Page>
        </Document>
      </PDFViewer>
      </div>
      
  );
}
