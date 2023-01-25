
import './stylesheets/ClassificationNavbar.css';

export const ClassificationNavbar = () => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    let text: string | null = e.currentTarget.textContent;
    console.log(text);
  }
  
  return (
    <nav className='classification-navbar-container'>
        <button onClick={handleClick}>Todos</button>
        <button onClick={handleClick}>Ornamental</button>
        <button onClick={handleClick}>Forestal</button>
        <button onClick={handleClick}>Industrial</button>
        <button onClick={handleClick}>Alimenticia</button>
        <button onClick={handleClick}>Medicinal</button>
        <button onClick={handleClick}>Exotica</button>
        <button onClick={handleClick}>Cactu</button>
        <button onClick={handleClick}>Frutal</button>
        <button onClick={handleClick}>Crasa</button>
        <button onClick={handleClick}>Suculenta</button>
    </nav>
  )
}
