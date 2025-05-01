
import React from 'react';

const employee = {
  name: 'Анна Петрова',
  role: 'Frontend Developer',
  email: 'anna@example.com',
  status: 'В отпуске',
  activeProjects: [
    { name: 'Project Pulse', task: 'Фронтенд' },
    { name: 'CRM Redesign', task: 'Тестирование API' }
  ],
  archive: [
    { name: 'HR Automation', task: 'UX-дизайн', from: '01.03.2025', to: '15.04.2025' },
    { name: 'Finance Dashboard', task: 'Интеграция', from: '10.01.2025', to: '25.02.2025' }
  ]
};

export default function App() {
  return (
    <div className="card">
      <h2>👤 Карточка сотрудника</h2>
      <p><strong>Имя:</strong> {employee.name}</p>
      <p><strong>Роль:</strong> {employee.role}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Статус:</strong> {employee.status}</p>

      <h3>🔵 Активные проекты</h3>
      <ul>
        {employee.activeProjects.map((proj, idx) => (
          <li key={idx}>
            {proj.name} — задача: <em>{proj.task}</em>
          </li>
        ))}
      </ul>

      <h3>📁 Архив проектов</h3>
      <ul>
        {employee.archive.map((entry, idx) => (
          <li key={idx}>
            {entry.name} — <em>{entry.task}</em> ({entry.from} – {entry.to})
          </li>
        ))}
      </ul>
    </div>
  );
}
