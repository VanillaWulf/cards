import {loadBoard} from "../store/board-reducer";

export const fetchBoard = () => {
    console.log('fetch');
    /*this not return payload*/
    return function() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response: any) => {
                console.log('test');
                console.log(response.json);
                response.json();
            })
    }
};
