import {useState} from 'react';
import JSONViewer from "./App";
import axios from 'axios';

export default function Result() {
    const url = 'https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/address/%3Ccontract_address%3E/transactions/?quote-currency=USD&format=JSON&page-size=5&key=ckey_89af1d8238cb431c90877e4bd30'

    const [data, setData] = useState(null);
    axios.get(url).then((res)=>{
        setData(res.data);
    });

    return (
        /* <JSONViewer
          json={[
              {
                  task: 'Learn React',
                  done: true,
              },
              {
                  task: 'Write Book',
                  done: false,
              },
          ]}
      /> */
        <JSONViewer json={data}/>
    )
}
