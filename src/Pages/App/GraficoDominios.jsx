
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

export default ({ ArrayPrams }) => {

    const data = [
        {
            name: 'Atividade Física',
            Max: 12,
            Paciente: ArrayPrams[0],
        },
        {
            name: 'Nutrição',
            Max: 12,
            Paciente: ArrayPrams[1],
        },
        {
            name: 'Álcool e Tabaco',
            Max: 8,
            Paciente: ArrayPrams[2],
        },
        {
            name: 'Sono',
            Max: 8,
            Paciente: ArrayPrams[3],
        },
        {
            name: 'Estresse',
            Max: 8,
            Paciente: ArrayPrams[4],
        },
        {
            name: 'Relacionamentos',
            Max: 8,
            Paciente: ArrayPrams[5],
        }
    ];
    return (
        <>
            <BarChart
                width={750}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 15]} interval={'preserveEnd'} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Max" fill="rgb(138, 3, 3)" activeBar={<Rectangle />} />
                <Bar dataKey="Paciente" fill="rgb(71, 74, 81)" activeBar={<Rectangle />} />
            </BarChart>
        </>
    )
}