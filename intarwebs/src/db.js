import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({ apiKey: 'AIzaSyDGObIuk51xiBVhpDlO39qlCsU8fMFDZVQ', authDomain: 'supnightlive.firebaseapp.com', databaseURL: 'https://supnightlive.firebaseio.com', projectId: 'supnightlive', storageBucket: 'supnightlive.appspot.com', messagingSenderId: '479177611207' })

const db = firebaseApp.database()
export default db
