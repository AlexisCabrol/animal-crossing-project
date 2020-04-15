package fr.animalcrossing.ac.service;

import fr.animalcrossing.ac.models.Capture;
import fr.animalcrossing.ac.models.Utilisateur;
import fr.animalcrossing.ac.repository.CaptureRepository;
import fr.animalcrossing.ac.security.ConnectedUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void ajouterCapture(final Integer idEspece) {
        final Utilisateur utilisateurCourant = connectedUserDetailsService.getUtilisateurCourant();
        Capture capture = Capture.builder()
                .idEspece(idEspece)
                .idUtilisateur(utilisateurCourant.getId())
                .build();
        captureRepository.save(capture);
    }
}
