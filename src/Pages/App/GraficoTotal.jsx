
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';


export default ({NumTotal}) => {

    const dataTotal = [
        {
            name: "Estilo de Vida",
            Maximo: 56,
            Paciente: Number(NumTotal)
        }
    ];
    return (
        <>
            <BarChart width={750} height={300} data={dataTotal}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 60]} interval={'preserveEnd'} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Maximo" fill="rgb(138, 3, 3)" activeBar={<Rectangle />} />
                <Bar dataKey="Paciente" fill="rgb(71, 74, 81)" activeBar={<Rectangle />} />
            </BarChart>
        </>

    )
}