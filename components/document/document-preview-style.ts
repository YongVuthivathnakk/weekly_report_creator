import { StyleSheet } from "@react-pdf/renderer";

export const docStyles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 50,
    fontFamily: "Helvetica",
    fontSize: 11,
  },

  // --- Header ---
  headerSection: {
    marginBottom: 20,
  },
  headerMeta: {
    fontSize: 10,
    color: "#333333",
    lineHeight: 1.6,
  },

  // --- Title ---
  titleWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    textDecoration: "underline",
  },

  // --- Student Info ---
  infoTable: {
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  infoLabel: {
    width: 100,
    fontSize: 10,
    color: "#333333",
  },
  infoColon: {
    width: 20,
    fontSize: 10,
  },
  infoValue: {
    flex: 1,
    fontSize: 10,
    color: "#333333",
  },

  // --- Questions ---
  questionBlock: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
  },
  answerText: {
    fontSize: 10,
    color: "#444444",
    paddingLeft: 10,
    lineHeight: 1.6,
  },
});