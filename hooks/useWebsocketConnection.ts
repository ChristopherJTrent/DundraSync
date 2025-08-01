import { useEffect, useState } from 'react';

export default function useWebsocketConnection(
	initialURL: string | URL | undefined,

) {
	const [connected, setConnected] = useState<boolean>(false)
	const [uri, setUri] = useState<URL>(new URL(initialURL ?? "wss://example.com"))
	const [attemptsSinceLastSuccess, setAttemptsSinceLastSuccess] = useState<number>(0)
	const [connection, replaceConnection] = useState<WebSocket>()


	useEffect(() => {
		const socket = new WebSocket(uri)
		socket.binaryType = 'arraybuffer'
		replaceConnection(socket)
	}, [uri])

	return {
		connected,
		uri,
		connection,
		setUri,
	}
}