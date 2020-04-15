package fr.animalcrossing.ac.service;

import fr.animalcrossing.ac.models.Capture;
import fr.animalcrossing.ac.repository.CaptureRepository;
import fr.animalcrossing.ac.security.ConnectedUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaptureService {

    private final ConnectedUserDetailsService connectedUserDetailsService;
    private final CaptureRepository captureRepository;

    @Autowired
    public CaptureService(final CaptureRepository captureRepository,
                          final ConnectedUserDetailsService connectedUserDetailsService) {
        this.captureRepository = captureRepository;
        this.connectedUserDetailsService = connectedUserDetailsService;
    }

    public List<Integer> ajouterCapture(final Integer idEspece) {
        final Integer idUtilisateurCourant = connectedUserDetailsService.getUtilisateurCourant().getId();

        Capture capture = Capture.builder()
                .idEspece(idEspece)
                .idUtilisateur(idUtilisateurCourant)
                .build();
        captureRepository.save(capture);

        return getListeCapture(idUtilisateurCourant);
    }

    public List<Integer> supprimerCapture(final Integer idEspece) {
        final Integer idUtilisateurCourant = connectedUserDetailsService.getUtilisateurCourant().getId();
        Capture capture = captureRepository.getCapturePourUnUtilisateurEtUneEspece(idUtilisateurCourant, idEspece);
        captureRepository.delete(capture);
        return getListeCapture(idUtilisateurCourant);
    }

    public List<Integer> getListeCapture() {
        final Integer idUtilisateurCourant = connectedUserDetailsService.getUtilisateurCourant().getId();
        return captureRepository.getListeEspecePourUnUtilisateur(idUtilisateurCourant);
    }

    public List<Integer> getListeCapture(final Integer idUtilisateurCourant) {
        return captureRepository.getListeEspecePourUnUtilisateur(idUtilisateurCourant);
    }
}
