// import React from 'react'
import './App.css'

import { Cabecera } from './components/Cabecera'
import { Tareasv2 } from './components/Tareasv2'
import { Footer } from './components/Footer'

export const App = () => {
	return (
		<div className="min-h-screen min-w-screen flex flex-col">    {/* 100vh y columna */}
			<Cabecera />

			<main className="flex-1">                     {/* ocupa el hueco */}
				<Tareasv2 />
			</main>

			<Footer />
		</div>
	)
}
