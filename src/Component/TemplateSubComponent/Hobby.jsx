/* eslint-disable react/prop-types */


const Hobby = ({ Keyhobby }) => {
  return (
    <div>
      <div className="hobby m-0 d-flex flex-wrap">
        <h3 className="Hobbies-h fs-4">Hobbies</h3>
        {Keyhobby.map((hobby, index) => (
          <p key={index} className="my-auto mx-1 fw-medium">
            {hobby.Hobby},
          </p>
        ))}
      </div>
    </div>
  )
}

export default Hobby