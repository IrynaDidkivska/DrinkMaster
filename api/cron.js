export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://drink-master-project.onrender.com/api/application',
      {
        method: 'GET',
      }
    );

    if (response.ok) {
      res.status(200).send('Server awakened');
    } else {
      res.status(response.status).send('Error awakening server');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}
