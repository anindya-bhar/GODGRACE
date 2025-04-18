import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js';
import {getDatabase, ref, onValue} from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js';


const firebaseConfig = {
  apiKey: "AIzaSyCHpWupEkWtj8dHvvODBft7SlAq7yoB5Xg",
  authDomain: "godgrace-619bc.firebaseapp.com",
  databaseURL: "https://godgrace-619bc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "godgrace-619bc",
  storageBucket: "godgrace-619bc.firebasestorage.app",
  messagingSenderId: "272651904628",
  appId: "1:272651904628:web:96cb90327bc9926f4c5321",
  measurementId: "G-5G9Y6560PN"
};


function getShowImages()
{
    s=``;
    const dbref=ref(db,'show');
    onValue(dbref, (snapshot)=>
    { 
        snapshot.forEach(key=>
        {
            s+=`<img src="./photos/${key.val()}" alt="" class="show-img" id="show-photo-${key.key}">`;
            n++;
        });
        document.getElementById("show").innerHTML=s;
        for(let i=1; i<=n; i++)
        {
            document.getElementById(`show-photo-${i}`).style.height=(i==1)?'60vh':'0vh';
            document.getElementById(`show-photo-${i}`).style.width=(i==1)?'60vh':'0vh';
        }
    });
}

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
let s='';
let n=0;
getShowImages();