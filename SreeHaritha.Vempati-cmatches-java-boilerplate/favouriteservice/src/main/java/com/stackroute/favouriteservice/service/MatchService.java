package com.stackroute.favouriteservice.service;


import java.util.List;

import com.stackroute.favouriteservice.domain.Match;
import com.stackroute.favouriteservice.exception.MatchAlreadyExistsException;
import com.stackroute.favouriteservice.exception.MatchNotFoundException;

public interface MatchService {
	
	boolean saveMatch(Match match) throws MatchAlreadyExistsException;
	
	boolean deleteMatchById(int id) throws MatchNotFoundException;
	
	List<Match> getMyMatches(String userId);
	

}
