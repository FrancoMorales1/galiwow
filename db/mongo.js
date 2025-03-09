import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://new-user_1:vmBPgFDDA34SEZr@clusterwow.zr3mv.mongodb.net/?retryWrites=true&w=majority&appName=ClusterWow';

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.error(err);
  });

export default mongoose;