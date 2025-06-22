import { StyleSheet } from "@react-pdf/renderer";

/* styling for pdf file with improved text wrapping using only valid react-pdf CSS properties */
export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,   
    alignItems: 'center',       
    height: 842,                  
    width: 595,
  },
  container: {
    width: 450,                  
    padding: 20,
    flexGrow: 0,
  },
  personalInfo: {
    textAlign: 'center',
    marginBottom: 15,
  },
  name: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  contactInfo: {
    fontSize: 9,
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 3,
  },
  entryContainer: {
    marginBottom: 10,
    flexDirection: 'column',
  },
  twoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '100%',
  },
  leftColumn: {
    flex: 1,
    marginRight: 10,
    maxWidth: '60%',
  },
  rightColumn: {
    alignItems: 'flex-end',
    maxWidth: '35%',
    flexShrink: 0,
  },
  description: {
    width: '100%',
    marginTop: 5,
  }
});