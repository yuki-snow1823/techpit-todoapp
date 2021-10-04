import firebase from 'firebase/compat/app';
import "firebase/compat/auth"

const fbConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
};
firebase.initializeApp(fbConfig)

export default firebase