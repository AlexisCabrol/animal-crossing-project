package fr.animalcrossing.ac.service;

import fr.animalcrossing.ac.converter.EspeceConverter;
import fr.animalcrossing.ac.dtos.EspeceDTO;
import fr.animalcrossing.ac.repository.EspeceRepository;
import fr.animalcrossing.ac.security.ConnectedUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class EspeceService {

    private final ConnectedUserDetailsService connectedUserDetailsService;
    private final CaptureService captureService;
    private final EspeceRepository especeRepository;
    private final EspeceConverter especeConverter;

    @Autowired
    public EspeceService(final EspeceConverter especeConverter,
                         final EspeceRepository especeRepository,
                         final ConnectedUserDetailsService connectedUserDetailsService,
                         final CaptureService captureService) {
        this.especeConverter = especeConverter;
        this.especeRepository = especeRepository;
        this.connectedUserDetailsService = connectedUserDetailsService;
        this.captureService = captureService;
    }

    /**
     * Méthode permettant de sélectionner toutes les espèces
     *
     * @return la liste de toutes les espèces
     */
    public List<EspeceDTO> selectionnerToutesLesEspeces() {
        return especeRepository.findAll()
                .stream()
                .map(especeConverter::toEspeceDTO)
                .collect(Collectors.toList());
    }

    /**
     * Méthode permettant de sélectionner un type espèce en fonction du codeTypeEspece
     *
     * @param codeTypeEspece le code d'un type espèce
     * @return une liste d'espèce d'un type espèce
     */
    public List<EspeceDTO> selectionnerUnTypeEspece(final Integer codeTypeEspece) {
        return especeRepository.selectionnerUnTypeEspece(codeTypeEspece)
                .stream()
                .map(especeConverter::toEspeceDTO)
                .collect(Collectors.toList());
    }

    public List<EspeceDTO> selectionnerToutesEspecesCapture() {
        List<Integer> listeId = captureService.getListeCapture();
        return especeRepository.selectionnerToutesEspecesCaptureDunUtilisateur(listeId)
                .stream()
                .map(especeConverter::toEspeceDTO)
                .collect(Collectors.toList());
    }
}
