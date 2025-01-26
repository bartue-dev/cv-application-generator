import { Document, Page, Text, View, } from "@react-pdf/renderer";
import { styles } from "../utils/PdfStyleSheet";

function CvPdf({ personalData, educationData, workData, customListData, customTitle }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* Personal Info */}
          <View style={styles.personalInfo}>
            <Text style={styles.name}>{personalData.name}</Text>
            <Text style={styles.contactInfo}>{personalData.phone}</Text>
            <Text style={styles.contactInfo}>{personalData.address}</Text>
            <Text style={styles.contactInfo}>
              <Text style={{ textDecoration: 'underline' }}>{personalData.email}</Text>
            </Text>
          </View>

          {/* Education */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {educationData.map((list) => (
              <View key={list.id} style={styles.entryContainer}>
                <View style={styles.twoColumn}>
                  <View style={styles.leftColumn}>
                    <Text style={{ fontWeight: 'bold' }}>{list.school}</Text>
                    <Text>{list.course}</Text>
                  </View>
                  <View style={styles.rightColumn}>
                    <Text>{list.year}</Text>
                    <Text>{list.latinHonors}</Text>
                  </View>
                </View>
                <View style={styles.description}>
                  <Text>{list.description}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Work Experience */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {workData.map((list) => (
              <View key={list.id} style={styles.entryContainer}>
                <View style={styles.twoColumn}>
                  <View style={styles.leftColumn}>
                    <Text style={{ fontWeight: 'bold' }}>{list.company}</Text>
                    <Text>{list.location}</Text>
                  </View>
                  <View style={styles.rightColumn}>
                    <Text>{list.position}</Text>
                    <Text>{list.year}</Text>
                  </View>
                </View>
                <View style={styles.description}>
                  <Text>{list.description}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Custom Sections */}
          {customTitle.map((titleList) => (
            <View key={titleList.id} style={styles.section}>
              <Text style={styles.sectionTitle}>{titleList.title}</Text>
              {customListData
                .filter(list => list.customTitle === titleList.title)
                .map(list => (
                  <View key={list.id} style={styles.entryContainer}>
                    <View style={styles.twoColumn}>
                      <View style={styles.leftColumn}>
                        <Text style={{ fontWeight: 'bold' }}>{list.infoOne}</Text>
                        <Text>{list.infoTwo}</Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text>{list.infoThree}</Text>
                        <Text>{list.infoFour}</Text>
                      </View>
                    </View>
                    <View style={styles.description}>
                      <Text>{list.description}</Text>
                    </View>
                  </View>
                ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default CvPdf