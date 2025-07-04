/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				tertiary: 'var(--tertiary)',
				fourth: 'var(--fourth)',
				title: 'var(--title)',
				text: 'var(--text)',
				btnColor: 'var(--btn-color)',
				btnHover: 'var(--btn-hover-color)',
				btnBorder: 'var(--btn-border-color)',
			},
			keyframes: {
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100%)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				'slide-out-right': {
					'0%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(100%)',
					},
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(100%)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				'fade-in-out': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9999)',
					},
					'5%': {
						opacity: '1',
					},
					'95%': {
						opacity: '1',
					},
					'100%': {
						opacity: '0',
						transform: 'scale(1.05)',
					},
				},
				'moveWaveLeftRight': {
					'0%': {
						transform: 'translateX(0)',
					},
					'100%': {
						transform: 'translateX(100px)',
					},
				},
				'moveWaveRightLeft': {
					'0%': {
						transform: 'translateX(100px)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
				'zoomIn': {
					'0%': {
					  transform: 'scale(0)',
					  opacity: '0',
					},
					'100%': {
					  transform: 'scale(1)',
					  opacity: '1',
					},
				  },
				  'floating': {
					'0%, 100%': { transform: 'translateX(0)' }, // Inicio y fin en la posición original
					'50%': { transform: 'translateX(-10px)' }, // Mitad del ciclo sube 10px
				  },
				  'floating-2': {
					'0%, 100%': { transform: 'translateY(0)' }, // Inicio y fin en la posición original
					'50%': { transform: 'translateY(-20px)' }, // Mitad del ciclo sube 10px
				  },
				  'slide-in-left2': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100%)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(50%)',
					},
				},
				
			},
			animation: {
				'slide-in-left': 'slide-in-left 1s ease',
				'slide-in-left2': 'slide-in-left 3s ease',
				'slide-in-right': 'slide-in-right 1s ease',
				'slide-out-right': 'slide-out-right 1s ease',
				'fade-in-out': 'fade-in-out 15s infinite alternate ease-in-out',
				'moveWaveLeftRight': 'moveWaveLeftRight 6s ease-in-out alternate infinite',
				'moveWaveRightLeft': 'moveWaveRightLeft 6s ease-in-out alternate infinite',
				'zoom-in': 'zoomIn 1.1s ease-in-out forwards',
				'floating': 'floating-2 5s ease-in-out infinite',
				'floating-2': 'floating 2.5s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
