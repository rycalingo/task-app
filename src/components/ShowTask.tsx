export const ShowTask = () => {
  const task = [
    { id: '10001', name: 'TASK A', time: '00:00 06/31/2030' },
    { id: '10002', name: 'TASK B', time: '00:00 06/31/2030' },
    { id: '10003', name: 'TASK A', time: '00:00 06/31/2030' },
  ];

  return (
    <section className='showTask'>
      <p className='head'>
        <span>
          <span className='title'>Todo</span>
          <span className='count'>0</span>
        </span>
        <span className='clearAll'>Clear All</span>
      </p>
      <ul>
        {task.map((task) => (
          <li key={task.id && task.id}>
            <p>
              <span className='name'>{task.name ? task.name : 'New Task'}</span>
              <span className='time'>
                {task.time ? task.time : '00:00 05/31/2030'}
              </span>
            </p>
            <i className='bi bi-pencil-square'></i>
            <i className='bi bi-trash'></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
