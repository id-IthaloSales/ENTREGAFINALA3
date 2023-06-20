import React, { useRef } from 'react';


function AddSeries() {

    const previewImageRef = useRef(null);

    function readImage(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const previewImage = previewImageRef.current;
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    return (
        <main>
            <section className="conteiner-addSerie">
                <div>
                    <h1>Adicionar Serie:</h1><br />
                    <form className="list-23">
                        <label htmlFor="Nome">Nome:</label>
                        <input type="text" id="Nome" name="Nome" required /><br />
                        <label htmlFor="genero">Gênero:</label>
                        <input type="text" id="gênero" name="gênero" required /><br />
                        <label htmlFor="tempo">Duração de episódio:</label>
                        <input type="text" id="tempo" name="tempo" required /><br />
                        <label htmlFor="ano">Ano de Lançamento:</label>
                        <input type="number" id="ano" name="ano" required /><br />
                        <label htmlFor="sinopse">Sinopse:</label>
                        <textarea id="sinopse" name="sinopse" required></textarea><br />
                        <label htmlFor="diretor">Diretor:</label>
                        <input type="text" id="diretor" name="diretor" required /><br />
                        <label htmlFor="elenco">Elenco:</label>
                        <input type="text" id="elenco" name="elenco" required /><br />
                        <label htmlFor="temporadas">Temporadas:</label>
                        <input type="number" id="temporadas" name="temporadas" required /><br />
                        <label htmlFor="episodios">Episódios:</label>
                        <input type="number" id="episodios" name="episodios" required /><br />
                        <label htmlFor="trailer">Trailer:</label>
                        <input type="url" id="trailer" name="trailer" required /><br />
                        <label htmlFor="ondeAssistir">Onde Assistir?</label>
                        <input type="text" id="ondeAssistir" name="ondeAssistir" required /><br />
                        <label htmlFor="preview">Escolha uma imagem:</label>
                        <input type="file" id="preview" name="preview" accept="image/*" onChange={readImage} />
                        <input id="bttloguin" type="submit" value="Adicionar" />
                        
                    </form>
                </div>

                <section className="Container-capa">
                            <section>
                                <div id="preview-container">
                                    <img
                                        ref={previewImageRef}
                                        id="preview-image"
                                        src="#"
                                        alt="Prévia da imagem"
                                        style={{ display: 'none' }}
                                    />
                                </div>
                            </section>
                        </section>
            </section>

        </main >
    );
}
export default AddSeries;
