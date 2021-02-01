# Big Science
This repository contains Data and Code used for the data analysis on the Big Science Experts Recommendation paper. Four High Energy Physics and Astrophysics projects were studied: *ATLAS*, *BaBar*, *LIGO*, and *IceCube*. Data for these projects was collected from the INSPIRE HEP (https://inspirehep.net)collected from http://old.inspirehep.net/dumps/inspire-dump.html on Jan 8 2020. We also collected data from 3 BioMedical projects: The Human Genome Project (HGP), Human Cell Atlas (HCA) and (Human BioMolecular Atlas Program). Data for these projects were collected using the Microsoft Academic Graph (MAG) by matching entries from the projects websites and awards metadata.


## Data Organization
Processed data is organized in the `Data` folder:
- `Data/Publications`: contains the publications metadata for all the considered projects:
   - `Biomedical Matching`: Collected publication names and info for the Biomedical projects. MAG IDs for the matched entries are in the `.json` files.
   - `Entries_*_v5.csv.gz`: Compressed tables containing all the metadata from INSPIRE HEP for publications related to each of the considered Physics projects.
   - `Papers_*_v2.csv`: Tables containing metadata for the Biomedical projects, collected from MAG.   
- `Data/Funding`: contains funding information for the Physics projects (collected from the NSF Award Search) and HPG (from the NIH Reporter).
- `Data/Networks`: contains the institution collaboration networks for the Physics projects (in XNET format https://github.com/filipinascimento/xnet)
- `Data/Bundling`: contains processed bundling files for the edge bundling algorithm applied to the institution collaboration networks.
- `Data/PlotData`: contains all the processed data of the projects used to plot the considered metrics over time.
- `Data/MAG`: Place to move the MAG dataset.
- `Data/INSPIRE`: Place to move the INSPIRE dataset files (can be collected from http://old.inspirehep.net/dumps/inspire-dump.html).

## Code Organization
In order to run the full data processing pipeline, MAG data and INSPIRE data should be downloaded and moved to their respective folders in `Data`. The code can be found in the `Notebooks` and `Scripts` folders. `Scripts` folder contains the code to preprocess INSPIRE (`processINSPIREData.py`) and the MAG dataset `preprocessMAG.py`. Both scripts need to be executed before the analyses, except for generating the final plots by using `Notebooks/PlotAllProjects.ipynb` and `Notebooks/GenerateMaps.ipynb`, which only requires files in the `Data/PlotData/` and `Data/Networks/`, which are already available in this repository.

The analysis of the Physics projects can be found in the `PhysicsProjectAnalysis.ipynb` in the `Notebooks` folder. To generate the map visualization of the collaboration network of institutions for the Physics projects, use the `GenerateMaps.ipynb` notebook. Biomedical analysis can be found in `ProcessBioProjects.ipynb` and funding analyses in `Funding.ipynb`.


## Acknowledgments 
Biomedical data from this repository is a derived product from the Microsoft Academic Graph. Please if you use it, cite:

- Arnab Sinha, Zhihong Shen, Yang Song, Hao Ma, Darrin Eide, Bo-June (Paul) Hsu, and Kuansan Wang. 2015. An Overview of Microsoft Academic Service (MAS) and Applications. In Proceedings of the 24th International Conference on World Wide Web (WWW ’15 Companion). ACM, New York, NY, USA, 243-246. DOI=http://dx.doi.org/10.1145/2740908.2742839







  
