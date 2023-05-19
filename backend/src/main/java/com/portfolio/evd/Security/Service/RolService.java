package com.portfolio.evd.Security.Service;

import com.portfolio.evd.Security.Entity.Rol;
import com.portfolio.evd.Security.Repository.IRolRepository;

import com.portfolio.evd.Security.Enums.RolNombre;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class RolService {
    @Autowired
    IRolRepository irolRepository; 
    
    public Optional<Rol> getByRolNombre(RolNombre rolNombre) {
        
        return irolRepository.findByRolNombre(rolNombre);
    }
    
    public void save(Rol rol) {
        irolRepository.save(rol);
    }
}
