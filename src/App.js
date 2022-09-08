
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import './app.css';

function App() {

  const [albums, setAlbums] = useState([]);
	useEffect(() => {
		getAlbums();
	}, []);

  
	const getAlbums = () => {
		fetch("https://jsonplaceholder.typicode.com/albums").then(
			(result) => {
				result.json().then((resp) => {
					setAlbums(resp);
				});
			}
		)
	}

	//For Delete API Call

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
         getAlbums();
      });
    });
  }

  // For Upadte API Call

 const updateUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'foo',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
	const mappedAlbum = albums.map(album => {
		return (
			<tr key={album.id}>
				<td className='text-center'>{album.id}</td>
				<td className='text-center' colSpan='2'>
					{album.title}
				</td>
                 <td className='text-center'>
					<Button  size='lg'onClick={() => updateUser(album.id)} className="mb-4">
						Update
					</Button>
					<Button  size='lg'variant="danger" onClick={() => deleteUser(album.id)} className="mb-4">
						Delete
					</Button>
				</td>
			</tr>
		);
	});
	
	//If API Is Loading That Time Showing A Spinner While API Data Is Fetching
	const emptyAlbum = (
		<tr>
			<td colSpan='4' className='text-center'>
				<Spinner variant='info' animation='grow' />
			</td>
		</tr>
	);
   <h1>Album_List</h1>
	return (
		<div >

			<Table striped bordered hover bg="dark" >
				<thead>
					<tr>
						<th className='text-center' >ID</th>
            {/* <th className='text-center'>UserID</th> */}
						<th className='text-center' colSpan='2' >
							Album Title
						</th>
                <th className='text-center'>Actions</th>

					</tr>
				</thead>
				<tbody >{mappedAlbum.length > 0 ? mappedAlbum : emptyAlbum}</tbody>
			</Table>
		</div>
	);
  
}

export default App;
