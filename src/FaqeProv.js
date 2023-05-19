

function FaqeProv({ burgersArray }){
  return (
    <div>
    <h1>kam pyejte mbi App</h1>
    {burgersArray.map((el) => (
        <div key={el.type}>
          <h4>price: {el.cmimi}</h4>
          <h4>type: {el.type}</h4>
        </div>
      ))}
</div>

  )
}

export default FaqeProv;