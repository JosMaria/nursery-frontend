import { information, about, copyright } from './constants/index'

export const Footer = () => (
  <footer className='bg-[var(--color-level-seven)] text-[var(--color-level-one)]'>
    <div className='flex flex-wrap justify-around content-center p-5 gap-10'>
      <Section title={information.title} content={information.content} />
      <Section title={about.title} content={about.content} />
    </div>
    <Copyright title={copyright.title} textReference={copyright.textReference} linkReference={copyright.linkReference} />
  </footer>
)

interface FooterSectionProps {
  title: string,
  content: string
}

const Section = ({ title, content }: FooterSectionProps) => (
  <div className='flex flex-col w-[40em]'>
    <h2 className='text-xl font-semibold pb-4'>{title}</h2>
    <p className='text-sm'>{content}</p>
  </div>
)

interface CopyrightProps {
	title: string,
	textReference: string,
	linkReference: string
}

const Copyright = ({ title, linkReference, textReference}: CopyrightProps) => (
	<div className='w-full text-center'>
		<p className='py-2 text-sm'>
			{title}
			<a className='underline' href={linkReference} >
				<b>{textReference}</b>
			</a>
		</p>
	</div>
)
