import { useState } from 'react';

const App = () => {
	const [ count, setCount ] = useState(0);
	return (
		<div>
			<h1>💖 Hello World!</h1>
			<p>Welcome to your Electron and React application.</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				{count}
			</button>
		</div>
	);
};

export default App;
