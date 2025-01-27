import { StyleSheet } from "@react-pdf/renderer";

/* styling for pdf file */
export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
    justifyContent: 'center',    
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
    '& > *': {
      marginBottom: 3,
    }
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
    borderBottomStyle: 'solid',
    paddingBottom: 3,
  },
  entryContainer: {
    marginBottom: 10,
  },
  twoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    alignItems: 'flex-end',
  },
  description: {
    width: '100%',
    marginTop: 5,
  }
});
