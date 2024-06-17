import PropTypes from 'prop-types';
import Mala from '../images/mala-home.png'

export default function Section(props) {
    return (
        <section className={props.classSection}>
            <div className="conteudo">
                <h1>{props.titulo}</h1>
                <p>A terra das bananas, está preparado, aqui você encontra o godzila maldoso.</p>
            </div>
            <article className={props.imagem}>
                <img src={Mala} alt="Mala ilustrativa para viagem" />
            </article>
        </section>
    );
}

Section.propTypes = {
    classSection: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
};