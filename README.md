# Big Science
This repository contains data and code used for data analyses and visualizations discussed in the “Embracing data-driven decision making to manage and communicate the impact of big science collaborations” paper. Four High Energy Physics and Astrophysics projects were studied: *ATLAS*, *BaBar*, *LIGO*, and *IceCube*. Data for these projects was collected from the INSPIRE HEP (https://inspirehep.net) collected from http://old.inspirehep.net/dumps/inspire-dump.html on Jan 8 2020. We also collected data from three BioMedical projects: The Human Genome Project (HGP), Human Cell Atlas (HCA), and Human BioMolecular Atlas Program (HuBMAP). Citation data for publications associated with these projects was collected using Microsoft Academic Graph (MAG) data.

## Data Organization
Processed data is organized in the `Data` folder:
- `Data/Publications`: contains the publications metadata for all the considered projects:
   - `Physics_Papers_{Project}.csv.gz`: Compressed tables containing all publication metadata from INSPIRE HEP.
   - `Biomedical_Papers_{Project}.csv`: Tables containing metadata for the biomedical projects, collected from MAG used to generate science maps.   
   - `Biomedical Papers`: Publication data for the biomedical projects. MAG IDs for the matched entries are in the `.json` files.
- `Data/Funding`: contains funding information for three of the physics projects (collected from the NSF Award Search) and HuBMAP (from the NIH Reporter).
- `Data/Networks`: contains the institution collaboration networks for the physics projects (in XNET format https://github.com/filipinascimento/xnet)
- `Data/Bundling`: contains processed files for the edge bundling algorithm applied to the institution collaboration networks to generate Fig. 2
- `Data/PlotData`: contains all the processed data of the projects used to plot the considered metrics over time for Fig. 1.
- `Data/MAG`: Place to move the MAG dataset.
- `Data/INSPIRE`: Place to move the INSPIRE dataset files. The complete dataset employed in this study can be found in https://dx.doi.org/10.5281/zenodo.4496558. (a more recent version can be collected from http://old.inspirehep.net/dumps/inspire-dump.html).

## Code Organization
In order to run the full data processing pipeline, MAG data and INSPIRE data should be downloaded and moved to their respective folders in `Data`. The code can be found in the `Notebooks` and `Scripts` folders. `Scripts` folder contains the code to preprocess INSPIRE (`preprocessINSPIRE.py`) and the MAG dataset `preprocessMAG.py`. Both scripts need to be executed before the analyses if the objective is regenerate all the intermediate datasets. This process is not needed to generate the final plots by using `Notebooks/PlotAllProjects.ipynb` and `Notebooks/GenerateMaps.ipynb`, as these scripts only require files in the `Data/PlotData/` and `Data/Networks/`, which are already available in this repository.

The analysis of the physics projects can be found in the `PhysicsProjectAnalysis.ipynb` in the `Notebooks` folder. To generate the map visualization of the collaboration network of institutions for the Physics projects, use the `GenerateMaps.ipynb` notebook. The codefor the interactive institutions map can be found in the `Visualization` folder. Biomedical analysis can be found in `BiomedicalProjectAnalysis.ipynb` and funding analyses in `Funding.ipynb`.
The science maps featured in Figure 3 were created using the csv files in `Data/Publications/` and the ‘Visualization > Topical > Map of Science via Journals’ available in the Sci2 Tool freely available at https://sci2.cns.iu.edu. 




## Acknowledgments 
Citation counts for the biomedical projects were derived from the Microsoft Academic Graph. If you use the data, make sure to cite:

- Arnab Sinha, Zhihong Shen, Yang Song, Hao Ma, Darrin Eide, Bo-June (Paul) Hsu, and Kuansan Wang. 2015. An Overview of Microsoft Academic Service (MAS) and Applications. In Proceedings of the 24th International Conference on World Wide Web (WWW ’15 Companion). ACM, New York, NY, USA, 243-246. DOI=http://dx.doi.org/10.1145/2740908.2742839

