export const ClassificationNavbar = () => (
  <nav className='flex justify-evenly dark:bg-gray-800 text-gray-100 w-full'>
    {
      ['Todos', 'Ornamental', 'Forestal', 'Industrial', 'Alimenticia', 'Medicinal', 'Exotica', 'Cactu', 'Frutal', 'Crasa', 'Suculenta']
        .map((item, index) => <NavbarItemClassification key={index} text={item} />)
    }
  </nav>
)

interface NavbarItemClassificationProps {
  text: string
}

const NavbarItemClassification = ({ text }: NavbarItemClassificationProps) => (
  <div className='px-5 py-4 text-sm font-semibold hover:text-blue-600 hover:cursor-pointer'>
    {text}
  </div>
)