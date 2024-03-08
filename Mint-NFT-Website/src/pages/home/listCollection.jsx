// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// export function NFTCollectionList() {
//   const [collections, setCollections] = useState('');
//   const [loading, setLoading] = useState(true);


//   // API Key Token testnet Mumbai : X134E4QHHVTWUKG6FSIRHBTQI4HPXAKVSJ
//   // https://api-testnet.polygonscan.com/api?module=nft&apikey=X134E4QHHVTWUKG6FSIRHBTQI4HPXAKVSJ&action=getcollections

//   // API key blockdaemon : zpka_cec29cb6eef34f128fa2493fd72cb738_6e5dae2f
//   // https://docs.blockdaemon.com/reference/listnftcollections

//   // api key moralis : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImZmMDAxZDk2LTVjMzUtNGVkMC1iZDJjLThiMGE0YTQ5NmZmZSIsIm9yZ0lkIjoiMzgwNTU5IiwidXNlcklkIjoiMzkxMDQyIiwidHlwZUlkIjoiNWJkZWMzNDYtYWEyMy00NjRmLThmMmMtZjBlMTQ1ZTYxZjFiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDkyMTExOTMsImV4cCI6NDg2NDk3MTE5M30.Fr45n67ww4ZD9gyUKf2VK1LXfRJGvyuUDH0J5rJ6Jwc
//   // https://docs.moralis.io/web3-data-api/evm/reference/get-contract-nfts?address=0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB&chain=polygon&format=decimal
//   useEffect(() => {
//     const fetchNFTCollections = async () => {
//       const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           'X-API-Key': 'zpka_cec29cb6eef34f128fa2493fd72cb738_6e5dae2f'
//         }
//       };
      
//       fetch('https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/collections', options)
//         .then(response => response.json())
//         .then(response => function () {
//           // console.log(response)
//           setCollections(response)
//         })
//         .catch(err => console.error(err));
//     };

//     fetchNFTCollections();
//   }, []);

//   // console.log("collections : ", collections);
//   return (
//     <div>
//       <h1>Liste des Collections NFT</h1>
//       {/* {loading ? (
//         <p>Chargement en cours...</p>
//       ) : (
//         <ul>
//           {collections.map((collection, index) => (
//               <li key={index}>{collection}</li>
//           ))}
//         </ul>
//       )} */}
//     </div>
//   );
// }

// export default NFTCollectionList;
