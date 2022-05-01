import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './firebase.utils';

import { LeaderBoard } from '../../redux/leader-board/leader-board.types';


export const createAUserArr = async() => {
    const usersCollection = collection(db, 'users');
    const usersArr: LeaderBoard[] = [];
    const q = query(usersCollection);
    const querySnapShot = await getDocs(q);

    querySnapShot.docs.map(doc => {
        if (!usersArr.includes(doc.data() as LeaderBoard)) {
            usersArr.push(doc.data() as LeaderBoard);
        }
    });

    return usersArr;
}