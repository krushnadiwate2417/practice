function ReusableTable({ arrdata, remove, settosort }) {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th
                onClick={() => {
                  settosort((curr) => curr + 1);
                }}
              >
                Price
              </th>
            </tr>
          </thead>
          {arrdata.map((item, index) => {
            return (
              <tbody key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        remove(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default ReusableTable;
