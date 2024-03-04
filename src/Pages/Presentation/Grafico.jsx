import React, {useEffect} from 'react';
import { ComposedChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

const ChartComponent = () => {
    const data = [
        {
            name: 'Atividade Física',
            // Máximo: 12,
            Pacientes: [10, 5],
            Média: 7.5
        },
        {
            name: 'Nutrição',
            // Máximo: 12,
            Pacientes: [8, 4],
            Média: 6
        },
        {
            name: 'Álcool e Tabaco',
            // Máximo: 8,
            Pacientes: [6, 2],
            Média: 4
        },
        {
            name: 'Sono',
            // Máximo: 8,
            Pacientes: [5, 0],
            Média: 2.5
        },
        {
            name: 'Estresse',
            // Máximo: 8,
            Pacientes: [5, 3],
            Média: 4
        },
        {
            name: 'Relacionamentos',
            // Máximo: 8,
            Pacientes: [6, 1],
            Média: 3.5
        }
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        // useEffect(() => {
            // debugger
        // }, [active])

        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <h4 className="label">{`${label}`}</h4>
                    <p className="desc">{`Valor Máximo: ${payload[0].value[0]}`}</p>
                    <p className="desc">{`Valor Minimo: ${payload[0].value[1]}`}</p>
                    <p className="desc">{`Média: ${payload[1].value}`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <ComposedChart
            width={900}
            height={450}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 14]} interval={'preserveEnd'} />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconSize={25} />
            <Bar dataKey="Pacientes" fill="rgb(138, 3, 3)" shape={<Rectangle />} />
            <Line type="linear" dataKey="Média" strokeWidth={3} dot={{ stroke: 'white', strokeWidth: 5 }} />
        </ComposedChart>
    );
}

export default ChartComponent;
